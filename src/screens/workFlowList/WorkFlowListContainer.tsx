import React from 'react';

import WorkFlowListScreen from './WorkFlowListScreen';

export const ListingData = [
  {
    id: "1",
    title: "Honde",
  },
  {
    id: "2",
    title: "Aiways",
  },
  {
    id: "3",
    title: "Aptera",
  },
  {
    id: "4",
    title: "Aptera",
  },
  {
    id: "5",
    title: "Aptera",
  },
  {
    id: "6",
    title: "Honde",
  },
  {
    id: "7",
    title: "Honde",
  },
  {
    id: "8",
    title: "Honde",
  },
  {
    id: "9",
    title: "Honde",
  },
  {
    id: "10",
    title: "Honde",
  },
  {
    id: "11",
    title: "Honde",
  },
  {
    id: "12",
    title: "Honde",
  },
  {
    id: "13",
    title: "Honde",
  },
  {
    id: "14",
    title: "Honde",
  },
  {
    id: "15",
    title: "Honde",
  },
];

const WorkFlowListContainer = () => {
  return (
    <WorkFlowListScreen ListingData={ListingData} />
  );
};

export default WorkFlowListContainer;
