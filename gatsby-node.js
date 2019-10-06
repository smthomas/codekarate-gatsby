const path = require(`path`);
const { paginate } = require('gatsby-awesome-pagination')
const { ensureTrailingSlash } = require('./src/utils/trailingSlash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // Create pages for learning library.
  const learningLibrary = await graphql(`
    {
      allNodeLearningLibrary {
        nodes {
          id
          title
          path {
            alias
          }
        }
      }
    }
  `);
  paginate({
    createPage,
    items: learningLibrary.data.allNodeLearningLibrary.nodes,
    itemsPerPage: 10,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/` : `/library`),
    component: path.resolve(`src/templates/library.js`),
  });
  learningLibrary.data.allNodeLearningLibrary.nodes.map(learningLibrary =>
    createPage({
      path: ensureTrailingSlash(learningLibrary.path.alias),
      component: path.resolve(`src/templates/libraryLesson.js`),
      context: {
        LessonId: learningLibrary.id,
      },
    })
  );

  // Create pages for courses and course lessons.
  const course = await graphql(`
    {
      allNodeCourse {
        nodes {
          id
          title
          path {
            alias
          }
          relationships {
            course_lessons {
              id
              title
            }
          }
        }
      }
    }
  `);
  course.data.allNodeCourse.nodes.map(course => {
    createPage({
      path: ensureTrailingSlash(course.path.alias),
      component: path.resolve(`src/templates/course.js`),
      context: {
        CourseId: course.id,
      },
    });
    course.relationships.course_lessons.map((lesson, index) =>
      createPage({
        path: ensureTrailingSlash(course.path.alias + 'lesson/' + index),
        component: path.resolve(`src/templates/lesson.js`),
        context: {
          LessonId: lesson.id,
        },
      })
    );
  });

  // Create all the necessary redirects.
  if (process.env.NODE_ENV === 'production') {
    const redirects = await graphql(`
      {
        allRedirectRedirect {
          edges {
            node {
              redirect_source {
                path
              }
              redirect_redirect {
                uri
              }
              status_code
            }
          }
        }
      }
    `);

    redirects.data.allRedirectRedirect.edges.map(redirect => {
      createRedirect({
        fromPath: `/${redirect.node.redirect_source.path}`,
        toPath: redirect.node.redirect_redirect.uri.replace('internal:', ''),
        statusCode: redirect.node.status_code,
      });
    });
  }
};
