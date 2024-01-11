import style from './footer.module.css'

function Footer({light}){
  const time = new Date()
  return (
    <footer className={
      light? 
      style.footer
      :
      style.footerDark

      }>
      <div>
        <h2>@copyright все права защищены {time.getFullYear()} год</h2>
      </div>
    </footer>
  )
}

export default Footer;