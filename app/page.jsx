import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Cookie Stand Admin</span>
    </h1>
    <p className='desc text-center'>
      Empowers users to explore, craft, and exchange delightful cookie stand ideas with the world.
    </p>

    <Feed />
  </section>
);

export default Home;
