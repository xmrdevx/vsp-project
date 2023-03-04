import { LeafletControlLayersConfig } from '@asymmetrik/ngx-leaflet';
import { featureGroup, icon, marker, Point, TileLayer, tileLayer, tooltip, TooltipOptions } from 'leaflet';
import { OffenderCase, MapMarker, MissingPerson } from '@vsp/core';

export const streetMaps: TileLayer = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  detectRetina: true,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

export const wikiMaps: TileLayer = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
  detectRetina: true,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

export const defaultUnitedStatesCoordinates: any = {
  zoom: 5,
  coordinates: [41.560920971737524, -96.28023438050577]
}

export const defaultLeafletOptions: any = {
  layers: [streetMaps],
  zoom: defaultUnitedStatesCoordinates.zoom,
  center: defaultUnitedStatesCoordinates.coordinates
};

export const defaultLeafletDrawOptions: any = {
	position: 'topleft',
	draw: {
		marker: {
			icon: icon({
				iconSize: [ 25, 41 ],
				iconAnchor: [ 13, 41 ],
				iconUrl: '2b3e1faf89f94a4835397e7a43b4f77d.png',
				iconRetinaUrl: '680f69f3c2e6b90c1812a813edf67fd7.png',
				shadowUrl: 'a0c6cc1401c107b501efee6477816891.png'
			})
		},
		polyline: false,
		circle: {
			shapeOptions: {
				color: '#d4af37'
			}
		},
		rectangle: {
			shapeOptions: {
				color: '#85bb65'
			}
		}
	},
	edit: {
		featureGroup: featureGroup()
	}
};;

export const defaultLeafletLayerControls: LeafletControlLayersConfig = {
  baseLayers: {
    'Street Maps': streetMaps,
    'Wikimedia Maps': wikiMaps
  },
  overlays: {}
};

export const defaultLeafletMarkerIcon = {
  icon: icon({
    iconSize: [27, 41],
    iconAnchor: [13, 41],
    popupAnchor: [-4, 10],
    // iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
    iconUrl: './assets/images/map-markers/marker_svg_red.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png'
  })
};

export const defaultLeafletOffenderMarkerIcon = {
  icon: icon({
    iconSize: [30, 35],
    iconAnchor: [15, 25],
    popupAnchor: [-10, -10],
    // iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
    iconUrl: './assets/images/map-markers/offender-shield.png',
    // shadowUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png'
  })
};

export const defaultLeafletMissingMarkerIcon = {
  icon: icon({
    iconSize: [30, 37],
    iconAnchor: [15, 37],
    popupAnchor: [-40, 40],
    // iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
    iconUrl: './assets/images/map-markers/missing-square.png',
    // shadowUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png'
  })
};

export const defaultLeafletOffenderTooltipOptions = { direction: 'top', offset: {x: 0, y: -28 } as Point } as TooltipOptions;
export const defaultLeafletOffenderPopoverOptions = defaultLeafletOffenderTooltipOptions;
export const defaultLeafletMissingTooltipOptions = { direction: 'top', offset: {x: 2, y: -41 } as Point } as TooltipOptions;
export const defaultLeafletMissingPopoverOptions = defaultLeafletMissingTooltipOptions;

// export const defaultLeafletTooltipOptions = { direction: 'top', offset: {x: 4, y: -41 } as Point } as TooltipOptions;
// export const defaultLeafletPopoverOptions = defaultLeafletTooltipOptions;

// Creates a map marker for an offender
export const createOffenderMapMarker = (mapMarker: MapMarker<OffenderCase>): any => {
  const popupContent = createCasePopover(mapMarker.payload);
  const markerPopover = tooltip()
    .setContent(popupContent)
    // This is used with a popover, handles clicking popup
    // .on('add', () => this._addMarkerPopoverEventListeners(m));
  
  return marker(
      [mapMarker.coordinate.latitude, mapMarker.coordinate.longitude], 
      defaultLeafletOffenderMarkerIcon
    )
    .bindTooltip(markerPopover, defaultLeafletOffenderPopoverOptions);
};

// Creates map marker for a missing person
export const createMissingMapMarker = (mapMarker: MapMarker<MissingPerson>): any => {
  const popupContent = createMissingTooltip(mapMarker.payload);
  const markerPopover = tooltip()
    .setContent(popupContent)
    // This is used with a popover, handles clicking popup
    // .on('add', () => this._addMarkerPopoverEventListeners(m));
  
  return marker(
      [mapMarker.coordinate.latitude, mapMarker.coordinate.longitude], 
      defaultLeafletMissingMarkerIcon
    )
    .bindTooltip(markerPopover, defaultLeafletMissingPopoverOptions);
};

// Creates a tooltip for a case (used by offender map markers).
export const createCaseTooltip = (offenderCase: OffenderCase): string => {
  const defaultAvatar = `
    <span class="mr-2" style="background: #CCC; border-radius: 4px; padding: 6px width: 32px; height: 32px;">
      <svg viewBox="64 64 896 896" focusable="false" fill="white" width="20px" height="20px" data-icon="user" aria-hidden="true">
        <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
      </svg>
    </span>
  `;
  const offenderAvatar = `
    <span class="mr-2" style="background: #CCC; border-radius: 4px;  width: 32px; height: 32px;">
      <img class="block w-100 h-100" style="border-radius: 4px;" src="${ offenderCase?.offender?.avatarUrl }" />
    </span>
  `;
  return `
    <div class="flex flex-row justify-content-center align-items-center" style="cursor: pointer" id="${offenderCase.id}">
      ${ offenderCase?.offender?.avatarUrl ? offenderAvatar : defaultAvatar }
      <span>
        <span class="fw-bold">
          ${offenderCase?.offender?.firstName || '' } ${offenderCase?.offender?.lastName || ''}
        <span>
        <h5 class="fw-bold text-error">Offender</h5>
      </span>
      
    </div>
  `;
};

// Creates a tooltip for missing person
export const createMissingTooltip = (missingPerson: MissingPerson): string => {
  const defaultAvatar = `
    <span class="mr-2" style="background: #CCC; border-radius: 4px; padding: 6px width: 32px; height: 32px;">
      <svg viewBox="64 64 896 896" focusable="false" fill="white" width="20px" height="20px" data-icon="user" aria-hidden="true">
        <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
      </svg>
    </span>
  `;
  const missingPersonAvatar = `
    <span class="mr-2" style="background: #CCC; border-radius: 4px;  width: 32px; height: 32px;">
      <img class="block w-100 h-100" style="border-radius: 4px;" src="${ missingPerson?.person?.avatarUrl }" />
    </span>
  `;
  return `
    <div class="flex flex-row justify-content-center align-items-center" style="cursor: pointer" id="${missingPerson.id}">
      ${ missingPerson?.person?.avatarUrl ? missingPersonAvatar : defaultAvatar }
      <span>
        <span class="fw-bold">
          ${missingPerson?.person?.firstName || '' } ${missingPerson?.person?.lastName || ''}
        <span>
        <h5 class="fw-bold text-error">Missing</h5>
      </span>
    </div>
  `;
};

export const createCasePopover = createCaseTooltip;
