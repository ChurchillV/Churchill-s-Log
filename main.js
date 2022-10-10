import './main.css'
import Content from './content'
//import profileImage from '../images/Article-profile1.jpg'
import profileImage from '../'

function main() {
  return (
    <>
    <div className="article_1">
      <img src="../images/Article-profile1.jpg" alt="bulldog picture"/>
      <section className='article_preview'>
        <h1 className='Title'>Raising Bulldogs </h1>
        <Content/>
      </section>
    </div> 

    <div className="article_1">
      <img src="../images/Articleprofile2.jpg" alt="bulldog picture"/>
      <section className='article_preview'>
        <h1 className='Title'>Raising Bulldogs </h1>
        <Content/>
      </section>
    </div> 

    <div className="article_1">
      <img src="../images/Article_profile3.jpg" alt="bulldog picture"/>
      <section className='article_preview'>
      <h1 className='Title'>Raising Bulldogs </h1>
      <Content/>
      </section>
    </div> 


    </>
  )
}

export default main
