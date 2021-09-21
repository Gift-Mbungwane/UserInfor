class UserModel {
  userName;
  surName;
  email;
  mobile;
  photo;
  address;

  constructor() {}

  setName(name) {
    this.userName = name;
  }
  setSurname(surname) {
    this.surName = surname;
  }

  setEmail(email) {
    this.email = email;
  }

  setMobile(mobile) {
    this.mobile = mobile;
  }

  setPhoto(photo) {
    this.photo = photo;
  }

  setAddress(address) {
    this.address = address;
  }
}

const globalUserModel = new UserModel();
export default globalUserModel;
