import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface Props {
    children?: React.ReactNode;
}

const HomeComponent: React.FC<Props> = ({ children }: Props) => {
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <div className="container mx-auto">
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default HomeComponent;
