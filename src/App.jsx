import luxuryIcon from './images/icon-luxury.svg';
import sedansIcon from './images/icon-sedans.svg';
import suvsIcon from './images/icon-suvs.svg';

function Card({icon, title, content, bg}) {
  return (
    <section className={'min-w-2/6 p-10'} style={{backgroundColor: bg}}>
      <div>
        <img src={icon} alt={`${title}-icon`} />
      </div>
      <div className='mt-8 h-56 min-h-fit mb-6'>
        <h1 className="text-4xl text-very-light-gray font-BSD tracking-wide mb-6">{title}</h1>
        <p className='text-tr-white text-normal'>{content}</p>
      </div>
      <div className='group/btn'>
        <button  style={{color: bg}} className={'bg-very-light-gray hover:bg-transparent rounded-full py-3 px-9 border-2 hover:border-very-light-gray hover:text-very-light-gray'}>
          <span className='inline group-hover/btn:hidden'>Learn More</span> 
          <span className='hidden group-hover/btn:inline text-tr-white'>Learn More</span> 
        </button>
      </div>
    </section>
  )
};

const cardContent = [
  {
    bg: "hsl(31, 77%, 52%)",
    icon: sedansIcon,
    title: 'Sedans',
    content: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
  },
  {
    bg: "hsl(184, 100%, 22%)",
    icon: suvsIcon,
    title: 'SUVs',
    content: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
  },
  {
    bg: "hsl(179, 100%, 13%)",
    icon: luxuryIcon,
    title: 'Luxury',
    content: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
  },
];

function App() {

  return (
    <main className='w-full min-h-screen flex items-center justify-center bg-very-light-gray'>
      <div className="max-w-3xl w-80 my-12 sm:my-0 sm:w-full sm:mx-2 md:w-11/12 bg-white rounded-lg grid grid-cols-1 sm:grid-cols-3 overflow-hidden">
        {cardContent.map(({icon, title, bg, content}, i) => (
          <Card key={i} bg={bg} icon={icon} title={title} content={content} />
        ))}
      </div>
    </main>
  )
}

export default App
