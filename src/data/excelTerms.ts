export interface ExcelTerm {
  term: string;
  category: string;
  description: string;
  example?: string;
  steps?: string[];
  tips?: string[];
  relatedTerms?: string[];
}

export const excelTerms: ExcelTerm[] = [
  {
    term: 'Recherche de données (VLOOKUP)',
    category: 'Formules',
    description: 'Permet de retrouver une information dans un grand tableau, comme chercher le prix d\'un produit à partir de sa référence',
    example: '=RECHERCHEV(A2; Liste_Prix; 2; FAUX)',
    steps: [
      'Cliquez dans la cellule où vous voulez voir le résultat',
      'Tapez le signe = (égal) pour commencer la formule',
      'Tapez RECHERCHEV (ou VLOOKUP en anglais)',
      'Entre parenthèses, cliquez d\'abord sur la cellule contenant la valeur à rechercher (ex: référence produit)',
      'Tapez un point-virgule (;)',
      'Sélectionnez avec votre souris tout le tableau dans lequel chercher',
      'Tapez un point-virgule (;)',
      'Indiquez le numéro de la colonne contenant l\'information à récupérer (2 pour la deuxième colonne, 3 pour la troisième, etc.)',
      'Tapez un point-virgule (;) puis FAUX',
      'Appuyez sur Entrée pour valider'
    ],
    tips: [
      'La valeur que vous cherchez doit toujours être dans la première colonne du tableau',
      'Si vous copiez-collez la formule, utilisez le symbole $ pour fixer le tableau (ex: $A$2:$B$10)',
      'En cas d\'erreur #N/A, vérifiez que la valeur recherchée existe bien dans la première colonne'
    ],
    relatedTerms: ['Recherche par Index/Equiv', 'Recherche Horizontale']
  },
  {
    term: 'Recherche par Index/Equiv',
    category: 'Formules',
    description: 'Une méthode plus flexible pour rechercher des informations, qui fonctionne dans toutes les directions',
    example: '=INDEX(C2:C10; EQUIV(A2; B2:B10; 0))',
    steps: [
      'Cliquez dans la cellule où vous voulez le résultat',
      'Tapez = puis INDEX(',
      'Sélectionnez la colonne où se trouve l\'information à récupérer',
      'Tapez un point-virgule (;)',
      'Tapez EQUIV(',
      'Cliquez sur la cellule contenant la valeur à rechercher',
      'Tapez un point-virgule (;)',
      'Sélectionnez la colonne où chercher cette valeur',
      'Tapez un point-virgule (;) puis 0)',
      'Fermez la formule avec une dernière parenthèse',
      'Appuyez sur Entrée'
    ],
    tips: [
      'Cette méthode est plus souple car vous pouvez chercher dans n\'importe quelle colonne',
      'Le 0 à la fin signifie qu\'on veut une correspondance exacte',
      'Particulièrement utile quand vos données ne sont pas dans l\'ordre'
    ]
  },
  {
    term: 'Automatisation (Macros)',
    category: 'Macros et VBA',
    description: 'Enregistrez une série d\'actions pour les rejouer automatiquement, comme un film de vos manipulations Excel',
    steps: [
      'Activez l\'onglet "Développeur" : cliquez sur Fichier > Options > Personnaliser le ruban > cochez "Développeur"',
      'Dans l\'onglet Développeur, cliquez sur "Enregistrer une macro"',
      'Donnez un nom simple sans espaces (ex: FormatRapport)',
      'Cliquez sur OK pour démarrer l\'enregistrement',
      'Effectuez toutes les actions que vous voulez automatiser',
      'Cliquez sur "Arrêter l\'enregistrement" (le carré noir)',
      'Pour rejouer la macro : onglet Développeur > Macros > sélectionnez votre macro > Exécuter'
    ],
    tips: [
      'Faites un test à blanc avant d\'enregistrer pour ne pas faire d\'erreurs',
      'Utilisez les raccourcis clavier plutôt que la souris pendant l\'enregistrement',
      'Sauvegardez votre fichier au format .xlsm pour garder les macros',
      'Si les macros sont désactivées, cliquez sur "Activer le contenu" en haut du fichier'
    ]
  },
  {
    term: 'Tableau Croisé Dynamique',
    category: 'Tableaux et Données',
    description: 'Un outil puissant pour résumer et analyser vos données, comme faire des totaux par catégorie automatiquement',
    steps: [
      'Sélectionnez vos données (assurez-vous d\'avoir des en-têtes de colonnes)',
      'Cliquez sur l\'onglet "Insertion" dans le ruban en haut',
      'Cliquez sur "Tableau croisé dynamique" (généralement à gauche)',
      'Choisissez où placer le tableau (nouvelle feuille conseillée)',
      'Dans la partie droite, glissez-déposez les champs :',
      '- Les éléments à compter/sommer dans "Valeurs"',
      '- Les catégories dans "Lignes" ou "Colonnes"',
      '- Les filtres dans "Filtres"'
    ],
    tips: [
      'Double-cliquez sur les chiffres pour voir le détail des données',
      'Clic droit > Actualiser pour mettre à jour avec les nouvelles données',
      'Utilisez les segments (boutons de filtre) pour filtrer facilement',
      'Regroupez les dates par mois/trimestre avec un clic droit > Grouper'
    ]
  }
];