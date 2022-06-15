import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
function index({ data }) {
  return (
    <div>
      {data.slice(0, 5).map((curEle) => {
        return (
          <div key={curEle.id}>
            <h3>{curEle.id}</h3>
            <Link href={`/blogs/${curEle.id}`}>
              <h3>{curEle.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default index;
