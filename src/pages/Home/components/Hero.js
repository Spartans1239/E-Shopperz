import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export const Hero = () => {
  // Animation spring configuration
  const slideIn = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0, transform: "translateX(100%)" },
    config: { duration: 1000 }, // Adjust the duration as needed
  });

  return (
    <animated.section
      className="flex flex-col lg:flex-row dark:text-slate-100 items-center"
      style={slideIn}
    >
      <div className="text my-5">
        <h1 className="text-5xl font-bold">The Ultimate eBook Store</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">
          TechLib is the world's most popular and authoritative source for
          computer science ebooks. Find ratings and access to the newest books
          digitally.
        </p>
        <Link
          to="/products"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore eBooks
        </Link>
      </div>
      <animated.div
        className="visual my-5 lg:max-w-xl"
        style={slideIn}
      >
        <img
          className="rounded-lg max-h-full"
          src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60"
          alt="TechLib Hero Section"
        />
      </animated.div>
    </animated.section>
  );
};
