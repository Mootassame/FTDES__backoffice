import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import publication from 'src/modules/publication/publicationReducers';
import forum from 'src/modules/forum/forumReducers';
import demandeAppui from 'src/modules/demandeAppui/demandeAppuiReducers';
import evenement from 'src/modules/evenement/evenementReducers';
import thematique from 'src/modules/thematique/thematiqueReducers';
import tags from 'src/modules/tags/tagsReducers';
import artiste from 'src/modules/artiste/artisteReducers';
import espaceArtistique from 'src/modules/espaceArtistique/espaceArtistiqueReducers';
import domaine from 'src/modules/domaine/domaineReducers';
import categoryAppel from 'src/modules/categoryAppel/categoryAppelReducers';
import categoryEvenement from 'src/modules/categoryEvenement/categoryEvenementReducers';
import categoryPublication from 'src/modules/categoryPublication/categoryPublicationReducers';
import mouvement from 'src/modules/mouvement/mouvementReducers';
import action from 'src/modules/action/actionReducers';
import suicide from 'src/modules/suicide/suicideReducers';
import violence from 'src/modules/violence/violenceReducers';
import mediatique from 'src/modules/mediatique/mediatiqueReducers';
import apropos from 'src/modules/apropos/aproposReducers';
import { combineReducers } from 'redux';
import plan from 'src/modules/plan/planReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    publication,
    forum,
    demandeAppui,
    evenement,
    thematique,
    tags,
    artiste,
    espaceArtistique,
    domaine,
    categoryAppel,
    categoryEvenement,
    categoryPublication,
    mouvement,
    action,
    suicide,
    violence,
    mediatique,
    apropos,
  });
