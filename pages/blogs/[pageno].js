export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageno: curElem.id.toString(),
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.pageno;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
const myData = ({ data }) => {
  return (
    <div key={data.id}>
      <h3>{data.id}</h3>
      <h3>{data.title}</h3>
    </div>
  );
};

export default myData;
