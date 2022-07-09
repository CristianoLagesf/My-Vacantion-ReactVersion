import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLogin, selectCurrentLogin } from './LoginSlice';
import { Airplane, XSquare } from "phosphor-react"

import { Formik, Form } from 'formik';
import { validateLoginForm } from './ValidationLoginForm'
import FieldForm from "../UI/FieldText";

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showSign, setShowSign] = useState(true);
  const [showForgotPass, setShowForgotPass] = useState(false);
  const [btText, setText] = useState('Login')

  // const currentLogin = useSelector(selectCurrentLogin)
  const dispath = useDispatch();

  const handlerLoginForm = (values) => {
    const currentLogin = {
      id: Date.now(),
      username: values.username,
      password: values.password
    }
    dispath(setCurrentLogin(currentLogin))
    setShowModal(false)
  }

  const handlerSignupForm = (events) => {
    const teste = events.target.id
    console.log(teste)
    if (teste === 'Signup') {
      setShowSignup(true)
      setShowForgotPass(false)
      setShowSign(true)
      setText('Signup')


    } else if (teste === 'ForgotPass') {
      setShowForgotPass(true)
      setShowSignup(false)
      setShowSign(false)
      setText('Send')
    }
    // else if (teste === 'close') {
    //   setShowModal(false)
    //   setShowForgotPass(false)
    //   setShowSignup(false)
    //   setShowSign(true)

    // }

  }

  return (
    <>
      <div className="flex-none self-center mx-8  border-gray-100 font-bold text-2xl">
        <button className="flex overflow-hidden transition-all duration-200  active:transform active:scale-95 group "
          type="button"
          onClick={() => setShowModal(true)}>
          <div className="svg-wrapper flex flew-row">
            <Airplane size={42} color="#f7f7f7" weight="duotone"
              className="group-hover:fill-blue-900 
                          group-hover:transform group-hover:translate-x-12 
                          group-hover:rotate-90 group-hover:scale-100" />
            <span className="ml-2 pt-1 transition-all duration-500 ease-in-out  group-hover:translate-x-20">
              Login
            </span>
          </div>
        </button>
      </div>

      {showModal ? (
        <>
          {/* MODAL BOX  */}
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto 
                          fixed inset-0 z-50 outline-none focus:outline-none"
          >
            {/* BOX  */}
            <div className="relative w-[350px] my-6 mx-auto max-w-[400px]">
              {/*content*/}
              <div className="border-2 border-blue-10 rounded-lg shadow-lg relative flex flex-col w-full
                              bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 bg-bg-Company
                      border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Login
                  </h3>
                  {/* BUTTON CLOSE */}
                  <button
                    className="p-1 ml-auto  border-0  
                      float-right leading-none font-semibold outline-none 
                      focus:outline-none 
                      h-6 w-6 text-2xl block"
                    onClick={() =>
                      [setShowModal(false),
                      setShowForgotPass(false),
                      setShowSign(true),
                      setShowSignup(false),
                      setText('Login')
                      ]}
                  >
                    {/* <span className=" h-6 w-6 text-2xl block outline-none focus:outline-none"> */}
                    <XSquare size={32} color="#f7f7f7" weight="bold" />
                    {/* </span> */}
                  </button>
                  {/* BUTTON CLOSE */}
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Formik initialValues={{ username: '', password: '' }}
                    onSubmit={handlerLoginForm}
                    validate={validateLoginForm}
                  >
                    <Form className="grid justify-center">
                      {showForgotPass &&
                        <FieldForm placeholder="Email" id="login" name="Email" type="input" />
                      }
                      {showSignup &&
                        <FieldForm placeholder="Name" id="Name" name="name" type="input" />
                      }
                      {showSign && <>
                        <FieldForm placeholder="Email" id="login" name="Email" type="input" />
                        <FieldForm placeholder="Password" id="password" name="password" type="input" />
                      </>
                      }
                      {showSignup && (
                        <FieldForm placeholder="Repeat Password" id="RepeatPassword"
                          name="Repeat Password" type="input" />
                      )}
                    </Form>
                  </Formik>
                </div>
                {/*footer*/}
                <div className="grid items-center justify-center p-2 mb-5 border-t 
                                border-solid border-slate-200 rounded-b">
                  <button className="hover:underline underline-offset-2 text-blue-600 pb-6 pl-1"
                    onClick={handlerSignupForm}
                    id='ForgotPass'
                  >
                    Forgot Password ?
                  </button>

                  <button
                    className="bg-blue-700 text-white active:bg-blue-600 
                      font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg 
                      outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => setShowModal(false)}
                  >
                    {btText}
                  </button>

                  <span className="text-sm text-blue-10">Not a member ?
                    <button
                      onClick={handlerSignupForm}
                      id='Signup'
                      className="hover:underline underline-offset-2 text-blue-600">
                      Signup
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}


