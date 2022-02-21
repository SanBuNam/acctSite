const SocialButton = props => {
    let style = ""
    let url = ""
  
    if (props.site === "facebook") {
      style = styles.buttonFacebook
      url = "https://facebook.com/" + props.username
    } else if (props.site === "linkedin") {
      style = styles.buttonLinkedin
      url = "https://www.linkedin.com/" + props.username
    } else if (props.site === "twitter") {
      style = styles.buttonTwitter
      url = "https://www.twitter.com/" + props.username
    } else if (props.site === "instagram") {
      style = styles.buttonInstagram
      url = "https://www.instagram.com/" + props.username
    }
  
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className={style}>{props.children}&nbsp;</div>
      </a>
    )
  }

  export default SocialButton