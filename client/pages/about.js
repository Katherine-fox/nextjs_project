import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Layout.module.scss'
import html_logo from '../styles/images/html_logo.png';
import css3_logo from '../styles/images/css3_logo.png';
import sass_logo from '../styles/images/sass_logo.png';
import bootstrap_logo from '../styles/images/bootstrap_logo.png';
import mui_logo from '../styles/images/mui_logo.png';
import js_logo from '../styles/images/js_logo.png';
import jQuery_logo from '../styles/images/jQuery_logo.png';
import react_logo from '../styles/images/react_logo.png';
import php_logo from '../styles/images/php_logo.png';
import nodejs_logo from '../styles/images/nodejs_logo.png';
import mysql_logo from '../styles/images/mysql_logo.png';
import mongo_logo from '../styles/images/mongodb_logo.png';
import oop_logo from '../styles/images/oop_logo.png';
import git_logo from '../styles/images/git_logo.png';
import rest_api from '../styles/images/rest_api.png';
import ajax_logo from '../styles/images/ajax_logo.png';
import jira_clickup from '../styles/images/Jira_Clickup.png';
import scrum_kanban from '../styles/images/Scrum-Kanban.png';
import socket_logo from '../styles/images/socket_logo.png';
import sequelize_logo from '../styles/images/sequelize_logo.png';

function About() {
  let using = ["HTML", "CSS 3", "SASS/SCSS", "Bootstrap", "MUI", "JavaScript", "jQuery", "React", "Php", "NodeJs", "MySQL", "MongoDB", "OOP", "Git", "Sequelize", "Rest API", "AJAX", "JIRA/ClickUp", "Agile: Scrum/Kanban", "SocketIO"]
  let using_images = [html_logo, css3_logo, sass_logo, bootstrap_logo, mui_logo, js_logo, jQuery_logo, react_logo, php_logo, nodejs_logo, mysql_logo, mongo_logo, oop_logo, git_logo, sequelize_logo, rest_api, ajax_logo, jira_clickup, scrum_kanban, socket_logo]
  return (
    <>
      <Head>
        <title>CV Next App</title>
        <meta name="description" content="Kate's Website" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <div className={ `${styles.container} ${styles.column}`}>
        <h1 className={styles.h1}>Using Now</h1>
        <div className="skill-blocks" className={ `${styles.container} ${styles.container_blocks}`}>
        {
            using.map((item, key)=>{
                return(
                    <div className="block" className={styles.small_block}>
                        <div className="img-wrapper">
                          <Image
                            src={using_images[key]}
                            alt={item}
                          />
                        </div> 
                        <div className={styles.bold_text}>
                            {item}
                        </div> 
                    </div>
                )
            })
        }
        </div>
      </div>
    </>
  );
}

export default About;

