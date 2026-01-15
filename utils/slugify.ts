function slugify(payload: string) {
  return payload.toLowerCase().replace(/ /g, "-");
}

export { slugify };
