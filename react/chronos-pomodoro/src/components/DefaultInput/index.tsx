// type DefaultInputProps = {
//     type: 'text' | 'number' | 'search'; // | -> Union Type
// } & React.ComponentProps<'input'>;

// type DefaultInputProps = {} & React.ComponentProps<'input'>;


import styles from './styles.module.css'

type DefaultInputProps = {
    id:string;
    labelText:string; // ? A prop. existe mas é opcional

} & React.ComponentProps<'input'>;

export function DefaultInput({type, id, labelText, ...rest}: DefaultInputProps){
    return(
        <>  <label className={styles.label} htmlFor={id}>{labelText}</label> 
            <input className={styles.input} id={id} type={type} {...rest}/>
        </>
    );
}