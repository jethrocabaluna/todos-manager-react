import workList from '../dataSamples/workList';

const fetchData = async (URL) => {
  return await fetch(URL).then(data => data.json());
};

const listAPIs = [
  {
    type: "personal",
    name: "Todos-1",
    apiURL: "https://jsonplaceholder.typicode.com/todos"
  },
  {
    type: "work",
    name: "Todos-2",
    apiData: workList
  }
];

export { fetchData, listAPIs };