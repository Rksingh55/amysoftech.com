import ImageZoom from '../../components/ImageZoom';
import BlankLayout from '@/components/Layouts/BlankLayout';

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <div className=' '>
                <ImageZoom src="https://d3nn873nee648n.cloudfront.net/1200x1800-new/20616/PT1063827.jpg" alt="Product Image" />
            </div>
        </div>
    );
};

Home.getLayout = (page: any) => {
    return <BlankLayout>{page}</BlankLayout>;
};

export default Home;
