import React from 'react'
import "../css/Skills.css"

function Skills() {
  return (
    <div className='skills-div' id='skills'>
        <h2 style={{textAlign:"center"}}>Skills</h2>
         <div className='skills'>
             <div className="card">
             <img width={"120px"} src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="HTML" />
             </div>
             <div className="card">
             <img width={"120px"} src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="" />
             </div>
             <div className="card">
             <img width={"110px"} height={"110px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="JS" />
             </div>
             <div className="card">
             <img width={"150px"} src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png" alt="" />
             </div>
             <div className="card">
             <img width={"150px"} src="https://miro.medium.com/max/312/1*SRL22ADht1NU4LXUeU4YVg.png" alt="REDUX" />
             </div>
             <div className="card">
             <img width={"150px"} src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png" alt="github" />
             </div>
             <div className="card">
             <img width={"150px"} src="https://icons.getbootstrap.com/assets/img/icons-hero.png" alt="Bootstrap" />
             </div>
             <div className="card">
             <img width={"150px"} src="https://wptavern.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-19-at-8.43.27-PM.png" alt="Figma" />
             </div>
             <div className="card">
             <img width={"150px"} src="https://i.ibb.co/CB057wZ/node-removebg-preview.png" alt="Node" />
             </div>
             <div className="card">
             <img width={"150px"} src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true" alt="Node" />
             </div>
            
             <div className="card">
             <img width={"180px"} src="https://lh3.googleusercontent.com/WgTVt2TUmCDrJuhBVQi84ynGogOcDzzAwKrR4IUxObCoNd-VAVeRph3gQtlUEgYq2yj9OgwtsGw0ylIwigC66jHmy1I0oxJ3GbNaS1criuH6-ohZ39dnwLOdhAzYuqaR1OX5ln7n" alt="material_ui" />
             </div>
             
         </div>
    </div>
  )
}

export default Skills