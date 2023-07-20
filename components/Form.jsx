import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share how your cookie stand performed with the world, and let your
        imagination run wild
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your location
          </span>

          <input
            value={post.location}
            onChange={(e) => setPost({ ...post, location: e.target.value })}
            placeholder='Write your location here'
            required
            className='form_input '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Cookie Type{" "}
            <span className='font-normal'>
              (#vanilla, #chocolate, #butterscotch, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Minimum Customers per hour
          </span>
          <input
            value={post.min}
            onChange={(e) => setPost({ ...post, min: e.target.value })}
            type='text'
            placeholder='Number'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Maximum Customers per hour
          </span>
          <input
            value={post.max}
            onChange={(e) => setPost({ ...post, max: e.target.value })}
            type='text'
            placeholder='Number'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Average Cookies per sale
          </span>
          <input
            value={post.avg}
            onChange={(e) => setPost({ ...post, avg: e.target.value })}
            type='text'
            placeholder='Number'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
