const people = [
    {
      name: 'Harsha Vardhan',
      role: 'Founder / CEO',
      imageUrl:
        'https://source.unsplash.com/400x400/?smile',
    },
    {
        name: 'chandini',
        role: 'CTO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'leela prasad',
        role: 'CFO',
        imageUrl:
          'https://source.unsplash.com/400x400/?hero',
      },
      {
        name: 'Banda Bhargav',
        role: 'COO/ Developer',
        imageUrl:
          'https://source.unsplash.com/400x400/?founder',
      },
      {
        name: 'Rajamouli',
        role: 'VFX',
        imageUrl:
          'https://imgs.search.brave.com/LjZr6_a1VVBIL5XxIQjqp5cCRDXel5bEGYblGiLz_jw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MxL1NTX1JhamFt/b3VsaSxfMjAyMS5q/cGc',
      },
      {
        name: 'Prasanth Neel',
        role: 'Architect',
        imageUrl:
          'https://imgs.search.brave.com/5GAHRXSjZ47ZSGYRsuol-NB3IKbT9i6CBRjo4-JtGEw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FhL1ByYXNoYW50/aF9OZWVsX2luXzIw/MjIuanBn',
      }
  ]
  
const Leadership=()=> {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
             Our Innovative team beyond the development of Innov8mate with great Hardwork and efforts.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-orange-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

export default Leadership;