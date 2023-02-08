interface IAccess{
	signIn(login?, password?);
	logout();
}

class WebAccess implements IAccess{
	signIn() {
		console.log('Open user page')
	}

	logout() {
		console.log('Logout')
	}
};

class Verification implements IAccess{
    page: WebAccess;
	constructor(page: WebAccess) {
		this.page = page;
	}

	signIn(login: any, password: any) {
		if (this.authenticate(login, password)) {
			this.page.signIn();
		} else {
			console.log('Access denied!');
		}
	}

	authenticate(login: string ,password: string) {
		return login === 'admin' && password === '1111';
	}

	logout() {
		this.page.logout()
	}
};

const page = new Verification(new WebAccess());
page.signIn('User',1111);
page.signIn('admin','1111');
page.logout();