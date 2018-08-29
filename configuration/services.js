/**
 * Created by c5253649 on 09/01/2018.
 */

let env = browser.params.baseEnv.toLowerCase();

class Service {
  constructor(){
    this.localhostUrl = 'http://localhost';
    this.qafarm = 'https://qa.aws.ariba.com/api/';
    this.devfarm = 'https://devfarm.aws.ariba.com/api/';
    this.e2efarm = 'https://e2e.aws.ariba.com/api/';
    this.perffarm = 'https://perf.aws.ariba.com/api/';
    this.tlsfarm = 'https://tls.aws.ariba.com/api/';
    this.awsItgUrl = 'https://aws-itg.ariba-cobalt.com/api/';
    this.awsDevfarmUrl = 'https://aws-devfarm.ariba-cobalt.com/api/';
    this.awsDevfarm2Url = 'https://aws-devfarm2.ariba-cobalt.com/api/';
    this.awsQaUrl = 'https://aws-qa.ariba-cobalt.com/api/';
    this.awsQa2Url = 'https://aws-qa2.ariba-cobalt.com/api/';
    this.awsPerfUrl = 'https://aws-perf.ariba-cobalt.com/api/';
    this.apiMockBoxUrl = 'http://mockbox.query/mockbox/v1/rest';
    this.privateTokenUrl = 'https://tproxy.ariba-cobalt.com:9443/svcdev14mobile.lab1.ariba.com/private/v2/oauth/token';
    this.publicTokenUrl = 'https://tproxy.ariba-cobalt.com:9443/svcdev14mobile.lab1.ariba.com/v2/oauth/token';

    this.localhost = {
      apiPortalUrl: this.localhostUrl + ':3000/',
      apiServer: this.localhostUrl + ':8092',
      uerManagerUrl: this.localhostUrl + ':8095',
      mockBoxUrl: 'http://127.0.0.1:8003/mockbox/v1/rest'
    };

    this.qafarm = {
      apiPortalUrl: this.qafarm,
      mockBoxUrl: this.apiMockBoxUrl
    };

    this.devfarm = {
      apiPortalUrl: this.devfarm,
      mockBoxUrl: this.apiMockBoxUrl
    };

    this.e2efarm = {
      apiPortalUrl: this.e2efarm,
      mockBoxUrl: this.apiMockBoxUrl
    };

    this.perffarm = {
      apiPortalUrl: this.perffarm,
      mockBoxUrl: this.apiMockBoxUrl
    };

    this.tlsfarm = {
      apiPortalUrl: this.tlsfarm,
      mockBoxUrl: this.apiMockBoxUrl
    };

    this.awsitg = {
      apiPortalUrl: this.awsItgUrl,
      mockBoxUrl: this.apiMockBoxUrl
    };

    this.awsdevfarm  = {
      apiPortalUrl: this.awsDevfarmUrl,
      mockBoxUrl: this.apiMockBoxUrl
    };

    this.awsdevfarm2  = {
      apiPortalUrl: this.awsDevfarm2Url,
      mockBoxUrl: this.apiMockBoxUrl
    };

    this.awsqa  = {
      apiPortalUrl: this.awsQaUrl,
      mockBoxUrl: this.apiMockBoxUrl
    };

    this.awsqa2  = {
      apiPortalUrl: this.awsQa2Url,
      mockBoxUrl: this.apiMockBoxUrl
    };

    this.awsperf  = {
      apiPortalUrl: this.awsPerfUrl,
      mockBoxUrl: this.apiMockBoxUrl
    };
  }

  getEnv() {
    if (!this[env]){
      env = 'qafarm';
    }
    return this[env];
  }

  getMockBoxServer() {
    this.mockBoxUrl = this.getEnv().mockBoxUrl;
    return this.mockBoxUrl;
  }

  getApiPortal() {
    this.apiPortalUrl = this.getEnv().apiPortalUrl;
    return this.apiPortalUrl;
  }

  getApiServer() {
    if(env == 'localhost') {
      this.apiServer = this.getEnv().apiServer;
    } else {
      this.apiServer = this.getEnv().apiPortalUrl + 'apiserver/';
    }
    return this.apiServer;
  }

  getPrivateTokenUrl() {
    return this.privateTokenUrl;
  }

  getPublicTokenUrl() {
    return this.publicTokenUrl;
  }

  getUserManager() {
    if(env == 'localhost') {
      this.uerManager = this.getEnv().uerManagerUrl;
    } else {
      this.uerManager = this.getEnv().apiPortalUrl + 'user-manager/';
    }
    return this.uerManager;
  }

  getAdminUsername() {
    this.Admin = 'superuser';
    return this.Admin;
  }

  getAdminPwd() {
    this.AdminPwd = 'go2ariba';
    return this.AdminPwd;
  }
}

module.exports = new Service();
