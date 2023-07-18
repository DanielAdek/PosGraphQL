import SimpleMartServer from './SimpleMartServer';

export default class MainMartApplication {

  public static main() {
    new SimpleMartServer().runApplication()
  }
}

MainMartApplication.main()