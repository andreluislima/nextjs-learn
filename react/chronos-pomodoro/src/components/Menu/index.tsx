import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvalilableThemes = 'dark' | 'light'
export function Menu() {
  const [theme, setTheme] = useState<AvalilableThemes>(()=>{
    const storageTheme = (localStorage.getItem('theme') as AvalilableThemes || 'dark');
    return storageTheme;
  })
  

  const nextThemeIcon = {
    dark:<SunIcon/>,
    light:<MoonIcon/>
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ){
    event.preventDefault();

    setTheme(preventTheme =>{
      const nextThme = preventTheme === 'dark'? 'light' : 'dark'
      return nextThme;
    });
   }

  //  useEffect(()=>{
  //   console.log('useEffect com array deps vazio', Date.now());
  //  });//Executado toda vez que o componenente renderiza na tela.


  //   useEffect(()=>{
  //   console.log('useEffect com array deps vazio', Date.now());
  //  },[]);//Executado apenas uma vez quando o Rezct monta o componente na tela pela primeira vez


    useEffect(()=>{
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      return() =>{
        console.log('limpeza de trash atualizado')
      }
   }, [theme]);// Executado apenas quando o valor da função for alterado. 



  return (
    <nav className={styles.menu}>
      {/* <h1>{theme}</h1> */}
      <a href="#" 
      className={styles.menuLink}
      aria-label="Ir para a Home"
      title="Ir para a Home">
        <HouseIcon/>
      </a>

      <a href="#" 
      className={styles.menuLink}
      aria-label="Ver histórico"
      title="Ver histórico">
        <HistoryIcon/>
      </a>

      <a href="#" 
      className={styles.menuLink}
      aria-label="Configurações"
      title="Configurações">
        <SettingsIcon/>
      </a>

      <a href="#" 
      className={styles.menuLink}
      aria-label="Alterar o Tema da Página"
      title="Alterar o Tema da Página"
      onClick={handleThemeChange}
      >
      
      {nextThemeIcon[theme]}
      </a>
    </nav>
  )
    
}
