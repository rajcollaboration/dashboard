import { Analytics, Clear, CommentBankOutlined, DashboardCustomizeOutlined, DensitySmall, ProductionQuantityLimitsOutlined, Shop2Outlined, VerifiedUserOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.css';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const togle = ()=>{
        setIsOpen(!isOpen);
    }
    const CreateMenu = [
        {
            path: '/',
            name: 'Dashboard',
            icon: <DashboardCustomizeOutlined />
        },
        {
            path: '/about',
            name: 'About',
            icon: <VerifiedUserOutlined />
        },
        {
            path: '/product',
            name: 'Product',
            icon: <Shop2Outlined />
        },
        {
            path: '/comments',
            name: 'Comments',
            icon: <CommentBankOutlined />
        },
        {
            path: '/productlist',
            name: 'Product List',
            icon: <ProductionQuantityLimitsOutlined />
        },
        {
            path: '/analitics',
            name: 'Analitics',
            icon: <Analytics />
        }
    ]
    return (
        <div>
            <div className="sidebar_main">
                <div className="sidebar" style={{width: isOpen ? "300px" : "65px"}}>
                    <div className="top_section">
                        <h1 className="logo" style={{display: isOpen ? "block" : "none"}}>logo</h1>
                        <div className="bars">
                            {
                                isOpen ? <Clear onClick={togle}/> : <DensitySmall onClick={togle}/>
                            }
                        </div>
                    </div>

                    {
                        CreateMenu ? CreateMenu.map((item, index) => (
                            <Link to={item.path} key={index} className="link">
                                <div className="icon">{item.icon}</div>
                                <div className="link_text" style={{display: isOpen ? "block" : "none"}}>{item.name}</div>
                            </Link>
                        )) : ""
                    }
                </div>
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Sidebar;
