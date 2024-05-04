import './style.css';


export const Login = (param: string) => {
    console.log(` main Login console`)
    console.log(param)
    const mainContainer = document.createElement('div')
    if (param === 'LoginForm') return getResponse();
    else return mainContainer
}
const getResponse = () => {
    console.log(` Remote console`)
    const html: HTMLElement = document.createElement('div');
    html.appendChild(LoginForm());
    return html
};

const LoginForm = () => {
    const form = document.createElement('form');
    form.id = 'Login';

    const container = document.createElement('div');

    const titleLabel = document.createElement('div');
    titleLabel.className = 'text-l text-gray-900 pb-5 text-left';
    titleLabel.textContent = 'Log in with email address and password:';
    container.appendChild(titleLabel);

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email address';
    emailLabel.className = 'text-gray-900 text-left';
    container.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.autocomplete = 'off'

    emailInput.placeholder = ' Email address';
    emailInput.className = 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';
    container.appendChild(emailInput);

    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Password';
    passwordLabel.className = 'text-gray-900 text-left';
    container.appendChild(passwordLabel);

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.autocomplete = 'off'
    passwordInput.placeholder = ' Your password';
    passwordInput.className = 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';
    container.appendChild(passwordInput);

    const signInButton = document.createElement('button');


    signInButton.className = "inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-700 disabled:cursor-not-allowed disabled:border-cyan-300 disabled:bg-cyan-300 disabled:shadow-none";
    signInButton.innerHTML = 'Sign in';
    const buttonContainer = document.createElement('div')
    buttonContainer.className = "justify-end flex w-full pt-4";
    buttonContainer.appendChild(signInButton);
    container.appendChild(buttonContainer);


    form.appendChild(container);
    return form;
};
const container = document.getElementById('root');
container?.appendChild(LoginForm());

export default Login;

