import ZShapeFactory from "./ZShapeFactory";

const commonShapeProps = {
  stroke: { type: [Number, Boolean] },
  fill: { type: Boolean },
  color: { type: String },
  closed: { type: Boolean, default: true },
  visible: { type: Boolean, default: true },
  backface: { type: [String, Boolean], default: true }
};

export const ZAnchor = ZShapeFactory("Anchor", {});

export const ZRect = ZShapeFactory("Rect", {
  ...commonShapeProps,
  width: { required: true, type: Number },
  height: { required: true, type: Number }
});

export const ZRoundedRect = ZShapeFactory("RoundedRect", {
  ...commonShapeProps,
  width: { required: true, type: Number },
  height: { required: true, type: Number },
  cornerRadius: { type: Number }
});

export const ZEllipse = ZShapeFactory("Ellipse", {
  ...commonShapeProps,
  width: { type: Number },
  height: { type: Number },
  diameter: { type: Number },
  quarters: { type: Number }
});

export const ZPolygon = ZShapeFactory("Polygon", {
  ...commonShapeProps,
  radius: { required: true, type: Number },
  sides: { required: true, type: Number }
});

export const ZPath = ZShapeFactory("Shape", {
  ...commonShapeProps,
  path: { required: true, type: Array },
  closed: { type: Boolean }
});

export const ZHemisphere = ZShapeFactory("Hemisphere", {
  ...commonShapeProps,
  diameter: { required: true, type: Number }
});

export const ZCone = ZShapeFactory("Cone", {
  ...commonShapeProps,
  diameter: { required: true, type: Number },
  length: { required: true, type: Number }
});

export const ZCylinder = ZShapeFactory("Cylinder", {
  ...commonShapeProps,
  diameter: { required: true, type: Number },
  length: { required: true, type: Number },
  frontFace: { type: [String, Boolean], default: true },
  backFace: { type: [String, Boolean], default: true }
});

export const ZBox = ZShapeFactory("Box", {
  ...commonShapeProps,
  width: { required: true, type: Number },
  height: { required: true, type: Number },
  depth: { required: true, type: Number },
  leftFace: { type: [String, Boolean], default: true },
  rightFace: { type: [String, Boolean], default: true },
  rearFace: { type: [String, Boolean], default: true },
  frontFace: { type: [String, Boolean], default: true },
  topFace: { type: [String, Boolean], default: true },
  bottomFace: { type: [String, Boolean], default: true }
});
