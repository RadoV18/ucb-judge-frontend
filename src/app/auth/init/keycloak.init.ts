import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) {

    return () =>
        keycloak.init({
            config: {
                url: 'http://keycloak:8090',
                realm: 'software',
                clientId: 'frontend'
            },
            initOptions: {
                onLoad: 'login-required',
                checkLoginIframe: false
                // silentCheckSsoRedirectUri:
                //     window.location.origin + '/assets/silent-check-sso.html'
            }
        });
}
