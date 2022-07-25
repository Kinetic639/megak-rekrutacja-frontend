type Columns = {
  Header: string;
  accessor: string;
  query: string;
};

export const usersColumns = (): Columns[] => [
  {
    Header: 'email',
    accessor: 'email',
    query: 'email',
  },
  {
    Header: 'courseCompletion',
    accessor: 'courseCompletion',
    query: 'courseCompletion',
  },
  {
    Header: 'courseEngagment',
    accessor: 'courseEngagment',
    query: 'courseEngagment',
  },
  {
    Header: 'projectDegree',
    accessor: 'projectDegree',
    query: 'projectDegree',
  },
  {
    Header: 'teamProjectDegree',
    accessor: 'teamProjectDegree',
    query: 'teamProjectDegree',
  },
  {
    Header: 'bonusProjectUrls',
    accessor: 'bonusProjectUrls',
    query: 'bonusProjectUrls',
  },
];

export const usersDefaultColumnSize = () => ({
  minWidth: 30,
  width: 125,
  maxWidth: 400,
});
