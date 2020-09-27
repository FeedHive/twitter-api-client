export default interface IReferenceDirectory {
  title: string;
  subgroups: IReferenceSubGroup[];
}

export interface IReferenceSubGroup {
  title: string;
  endpoints: IReferenceEndpoint[];
}

export interface IReferenceEndpoint {
  title: string;
  url: string;
  resourceUrl: string;
  description?: string;
  exampleResponse?: string;
  parameters?: IParameter[];
}

export interface IParameter {
  name: string;
  required: boolean;
  description: string;
  type: 'string' | 'number' | 'boolean';
}
