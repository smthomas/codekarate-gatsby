import { css } from '@emotion/core';

// Containers
const contWidths = [680, 820, 1020, 1120, 1220];
const contLabels = [`min`, `textOnly`, `medium`, `large`, `max`];

export const contValues = contWidths.reduce((acc, value, i) => {
  acc[contLabels[i]] = `${value}px`;
  return acc;
}, {});

export const container = contWidths.reduce((acc, w, i) => {
  acc[contLabels[i]] = css`
    width: ${w}px;
    max-width: 100%;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  `;
  return acc;
}, {});
