import '../../styles/blogpost.css'
// import { useParams } from 'react-router-dom'

export default function Blogpost() {

  // const {id} = useParams()

  return (
    <div className='blogpost'>
      <div className='blogpost__container'>

        <div className="blogpost__header">
          <h1 className="blogpost__title">Bondi Beach Trip</h1>
          <div className="blogpost__extras">
            <img className="blogpost__profile" src='/images/profile.jpg' alt='profile pic' />
            <span className='blogpost__author'>Written by <b>Ronit Khatri</b></span>
            <span className="blogpost__date">January 24, 2023</span>
          </div>
        </div>


        <div className="blogpost__content">
          <img src="/images/travel.jpg" alt="blogpostimage" className="blogpost__image" />
          
          <p>
            When your support queues are long and the task at hand seems endless, it can be dispiriting 
            for the team and unhelpful for your customers. Taking active steps to isolate and manage the 
            backlog can get you back on track.
          </p>

          <h1>
            the tactic
          </h1>

          <p>
          Isolate the problem area from newly arriving customer conversations so you can maintain daily 
          service quality while you make progress on the backlog.
          </p>

          <h1>
            When to use it
          </h1>

          <p>
          Use this tactic when you have an unexpected and insurmountable number of active conversations to respond 
          to — a number that you cannot manage within your usual process. Not just "the queue is busy today!" levels, 
          but a volume at which you would never catch up if you don't do something differently.
          <br />
          <br />

          A suddenly overwhelming backlog of conversations can form for many reasons. Perhaps it’s due to a large product 
          failure or a problem with your email system. Whatever the cause, that chunk of aging conversations creates 
          significant delays in response times for both the existing backlog as well as every new request coming in.
          <br />
          <br />

          If you are in that situation, it is time to enact a different process. 
          </p>

          <h1>
          How to execute it
          </h1>

          <p>
          Consider this backlog handling process an emergency response plan. Once you have identified that a backlog is forming,
           the earlier you can act on your plan, the easier it will be to execute. The overarching idea with this process is 
           that it is better for a smaller set of people to have an unacceptably long wait than for every customer to have a
            very poor support experience.
            <br />
            <br />

          Here's the process.
          </p>

        </div>

      </div>
    </div>
  )
}
