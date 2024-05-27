import {Link} from 'react-router-dom';
// import {Container} from 'react-bootstrap';


function Navigation() {
  return (
    <div className='bg-danger'>
        <nav className='container mx-auto d-flex justify-content-between align-items-center py-2'>
            <div>
                <Link to={'/'}>
                    <img src='images/logo.png' alt='' style={{width: 80}}></img>
                </Link>
            </div>
            <ul className='list-unstyled d-flex gap-5'>
                <li ><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation;