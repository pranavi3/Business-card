import githubLogo from '../assets/github.jfif'
import linkedinLogo from '../assets/linkedin.png'

export function Details(props){
    return (
    <div>
        <h1>{props.name == null ? "NOT FOUND" : props.name}</h1>
        <p>{props.description == null ? "": props.description}</p>
        {
          props.interests && props.interests.length > 0?
          <div>
            <h2>Interests</h2>
            <div className='interests'>
              {
                  props.interests.map((interest, index)=>(
                      <p key={index}>{interest}</p>
                  ))
              }
            </div>
          </div>: <div></div>
        } 
        {
          props.linkedin?<a href={props.linkedin} target="_blank">
          <img src={linkedinLogo} className="logo react" alt="Linkedin" />
          </a>:<p></p>
        }
        {
          props.github?<a href={props.github} target="_blank">
          <img src={githubLogo} className="logo react" alt="Github" />
          </a> :<p></p>
        }
      </div>
    );
}
