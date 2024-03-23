import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";

const Home = () => {
    return (
        <div>
            <Banner />
            <JobCategoryList />
            <FeaturedJobs />
        </div>
    );
};

export default Home;