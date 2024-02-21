import { AbilityBuilder, createMongoAbility } from '@casl/ability';

export function defineAbilityFor(user) {
    
    const { can, cannot, build } = new AbilityBuilder(createMongoAbility);
  
    if (user.role === 'admin') {
      can('manage', 'all');
    }
    
    if (user.role === 'manager') {
      can('manage', 'article');
    }

    if (user.isAuthorised) {
      can('update', 'profile');
      cannot('create', 'profile');
      can(['create', 'update'], 'article');
    }
  
    return build();
  };
  