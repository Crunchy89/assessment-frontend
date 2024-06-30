import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface Props {
    children?: React.ReactNode;
}

const HomeComponent: React.FC<Props> = ({ children }: Props) => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <div className="container mx-auto">
                {children}
            </div>
        </div>
    );
};

export default HomeComponent;