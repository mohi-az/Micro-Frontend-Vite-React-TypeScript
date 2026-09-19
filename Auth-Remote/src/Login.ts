import './style.css';


export const Login = (): HTMLElement => {
    const html: HTMLElement = document.createElement('div');
    html.appendChild(LoginForm());
    return html;
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
    emailLabel.htmlFor = 'email';
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
    passwordLabel.htmlFor = 'password';
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
    signInButton.id = "sign_in";
    signInButton.type = 'submit';

    const registerButton = document.createElement('button');
    registerButton.className = "inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-green-500 hover:bg-green-600 focus:bg-green-700 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300 disabled:shadow-none";
    registerButton.innerHTML = 'Create an Account';
    registerButton.id = "create_account";
    registerButton.type = 'button';

    const buttonContainer = document.createElement('div')
    buttonContainer.className = "justify-end flex w-full pt-4 gap-2";
    buttonContainer.appendChild(registerButton);
    buttonContainer.appendChild(signInButton);
    container.appendChild(buttonContainer);

    const resgisterNote = document.createElement('div');
    resgisterNote.className='pt-6 pl-5'
    const ulNote = document.createElement('ul');
     ulNote.className = 'list-disc'
    const li1 = document.createElement('li');
    li1.innerText = 'Quick shopping';
    const li2 = document.createElement('li');
    li2.innerHTML = 'Order overview and shipping information';
    const li3 = document.createElement('li');
     li3.innerHTML = 'Manage your newsletter subscription';
    ulNote.appendChild(li1);
    ulNote.appendChild(li2);
    ulNote.appendChild(li3);

    resgisterNote.innerHTML = 'Advantages of registering : ';
    resgisterNote.appendChild(ulNote);
    container.appendChild(resgisterNote);

    const demoNote = document.createElement('p');
    demoNote.className = 'pt-4 text-sm text-gray-900';
    demoNote.textContent = 'Architecture demo only: authentication is not connected.';
    container.appendChild(demoNote);
    form.addEventListener('submit', event => event.preventDefault());

    form.appendChild(container);
    return form;
};
export default Login;

