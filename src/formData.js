export const albums = [
  { albumName: 'Showbiz', albumId: 'album1' },
  { albumName: 'Origin of Symmetry', albumId: 'album2' },
  { albumName: 'Absolution', albumId: 'album3' },
  { albumName: 'Black Holes And Revelations', albumId: 'album4' },
  { albumName: 'The Resistance', albumId: 'album5' },
  { albumName: 'The 2nd Law ', albumId: 'album6' },
  { albumName: 'Drones', albumId: 'album7' },
  { albumName: 'Simulation Theory', albumId: 'album8' },
]
export const fields = [
  {
    fieldName: 'What is the general message of the album?',
    fieldId: 'feild1',
    fieldType: 'text',
  },
  { fieldName: 'What track stands out?', fieldId: 'feild2', fieldType: 'text' },
  { fieldName: 'What track pull the album down?', fieldId: 'feild3', fieldType: 'text' },
  { fieldName: 'How is the band evolving in this album?', fieldId: 'feild4', fieldType: 'text' },
  {
    fieldName: 'How does this compare to their other albums?',
    fieldId: 'feild5',
    fieldType: 'text',
  },
  {
    fieldName: 'What other bands or albums does this album remind you of?',
    fieldId: 'feild6',
    fieldType: 'text',
  },
  {
    fieldName: 'Overall Rating',
    fieldId: 'feild7',
    fieldType: 'radio',
    fieldOptions: ['1', '2', '3', '4', '5'],
  },
  { fieldName: 'Final Notes', fieldId: 'feild8', fieldType: 'textarea' },
]
