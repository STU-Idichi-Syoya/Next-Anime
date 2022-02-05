import { useRouter } from "next/router";

//どんなpathがあるか
export const getStaticPaths = async () => {
    // const res = await fetch("http://localhost:3001/blog");
    // const json = await res.json();

    // const paths = json.contents.map((content) => `/anime/${content.id}`);
    const paths=["/anime/1","/anime/2","/anime/3"];
    return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
    return {props: {id: params.id}}
}

export default function AnimeDatil() {
  const router = useRouter();
  return <h1>商品{router.query.id}のページです</h1>;
}