import Navbar from './Navbar';
import Footer from './Footer';
import Pages from './Pages';
import Filter from './Filter';
export default function ItemsDetails() {
  return (
    <div className='bg-gray-100 '>
      <>
        <Navbar />
        <Filter />
        <Pages />
        <Footer />
      </>
    </div>
  )
}
