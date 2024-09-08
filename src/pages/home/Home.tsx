


interface homeProps {
  firstName?: string;
  age?: number;
}



const Home = ({firstName,age}:homeProps) => {




  return (
    <div>
      {
        firstName
      }
      {age}
    </div>
  )
}

export default Home