import Link from 'next/link';

const LinksMenu = [
  {
    name: 'Home',
    path: '/',
    delay: '125ms'
  },
  {
    name: 'Projects',
    path: '/projects',
    delay: '150ms'
  },
  {
    name: 'CV',
    path: '/cv',
    delay: '175ms'
  }
]

const LinksMenuNav = () => {
  return (
    <>
      {
        LinksMenu.map(({ name, path, delay }) => (
          <li
            key={name}
            className='border-gray-700 text-gray-100 text-sm font-semibold'
            style={{ transitionDelay: delay }}>
            <Link href={path} className='pb-4'>
              {name}
            </Link>
          </li>
        ))
      }
    </>
  )
}

export default LinksMenuNav;