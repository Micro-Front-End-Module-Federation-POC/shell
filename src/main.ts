import { loadManifest } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

loadManifest(environment.manifestPath)
  .catch(err => console.error(err))
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));
