export function moveAuditFieldsToEnd<T extends object>(entity: T): T {
  if (!entity) return entity;

  const { created_at, updated_at, created_by, updated_by, ...rest } = entity as any;

  return {
    ...rest,
    created_at,
    updated_at,
    created_by,
    updated_by,
  };
}
