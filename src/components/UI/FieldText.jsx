import { Field, ErrorMessage } from 'formik';



const FieldForm = (props) => {
    return (
        <div className=" relative py-[20px] mt-[10] w-full max-w-[180px] ">
            <Field className="form__field w-[full]  border-b-2 outline-none text-lg py-[7px]
                            bg-transparent  placeholder:text-transparent
                            focus:pb-[6px] focus:border-blue-5 focus:font-bold
                            peer"
                placeholder={props.placeholder}
                id={props.id}

                name={props.name}
                type={props.type} />
            <label className="form__label  absolute top-0 block duration-200 text-lg 
                                    pointer-events-none text-gray-300 
                                    peer-placeholder-shown:top-[20px]
                                    peer-placeholder-shown:text-lg 
                                    peer-focus:top-0 peer-focus:text-blue-5 
                                    peer-focus:font-bold peer-focus:text-lg 
                                    peer-focus:duration-200 "
                htmlFor={props.name}>{props.name}</label>
            <ErrorMessage name={props.name}>
                {(msg) => <p className='text-red-600'>{msg}</p>}
            </ErrorMessage>
        </div>
    )
}

export default FieldForm


