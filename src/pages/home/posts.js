import '../../styles/posts.css'
import Post from '../../components/post'

export default function posts() {
  return (
    <div className='posts'>
      
      <div className='posts__title'>
        <h3>Some Recent Posts</h3>
        <a href='#'>View more posts</a>
      </div>

      <div className='posts__content'>
        <Post 
          img = "https://img.freepik.com/premium-photo/happy-woman-sitting-car-traveling-summer-season-sea-resting-special-day-vacation_36577-127.jpg?w=2000" 
          category = "Travel"
          title = "Bondi Beach Trip"
          content = "Sydney is Australia’s largest and stunning city with its long sandy beaches, iconic architectures, scenic landscapes, and amazing native wildlife. As soon as you enter the city, you get hit by the vibrant and friendly ambience of the city. The city has been famous for various attractions,"
        />
        <Post 
          img = "https://img.freepik.com/premium-photo/happy-woman-sitting-car-traveling-summer-season-sea-resting-special-day-vacation_36577-127.jpg?w=2000" 
          category = "Travel"
          title = "Bondi Beach Trip"
          content = "Sydney is Australia’s largest and stunning city with its long sandy beaches, iconic architectures, scenic landscapes, and amazing native wildlife. As soon as you enter the city, you get hit by the vibrant and friendly ambience of the city. The city has been famous for various attractions,"
        />
        <Post 
          img = "https://img.freepik.com/premium-photo/happy-woman-sitting-car-traveling-summer-season-sea-resting-special-day-vacation_36577-127.jpg?w=2000" 
          category = "Travel"
          title = "Bondi Beach Trip"
          content = "Sydney is Australia’s largest and stunning city with its long sandy beaches, iconic architectures, scenic landscapes, and amazing native wildlife. As soon as you enter the city, you get hit by the vibrant and friendly ambience of the city. The city has been famous for various attractions,"
        />
        <Post 
          img = "https://img.freepik.com/premium-photo/happy-woman-sitting-car-traveling-summer-season-sea-resting-special-day-vacation_36577-127.jpg?w=2000" 
          category = "Travel"
          title = "Bondi Beach Trip"
          content = "Sydney is Australia’s largest and stunning city with its long sandy beaches, iconic architectures, scenic landscapes, and amazing native wildlife. As soon as you enter the city, you get hit by the vibrant and friendly ambience of the city. The city has been famous for various attractions,"
        />
      </div>
    </div>
  )
}
