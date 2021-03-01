import Auth from '../auth';

const LandingPage = (props) => {
  return (
    <div>
      Landing Page

      <button onClick={() => {
        Auth.login(() => {
          props.history.push('/app')
        })
      }}>
        Login
      </button>
    </div>
  )
}
export default LandingPage
