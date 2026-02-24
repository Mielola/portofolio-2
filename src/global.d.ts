// ****** FILE TYPES GLOBAL ******

export {};

declare module '*.glb';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { Object3DNode } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
      meshLineMaterial: Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>;
    }
  }
}